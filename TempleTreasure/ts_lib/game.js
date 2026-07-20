import { ContentManager } from "./contentManager.js";
import { GameClock } from "./gameClock.js";
import { GameTime } from "./gameTime.js";
import { TimeSpan } from "./timeSpan.js";
export class Game {
    maximumElapsedTime;
    gameTime = new GameTime();
    isFixedTimeStep = true;
    int_MaxValue = 2147483647;
    updatesSinceRunningSlowly1 = this.int_MaxValue;
    updatesSinceRunningSlowly2 = this.int_MaxValue;
    isActive = true;
    exitRequested = false;
    inactiveSleepTime = new TimeSpan(0);
    isMouseVisible = false;
    inRun = false;
    endRunRequired = false;
    clock;
    totalGameTime;
    targetElapsedTime = new TimeSpan(0);
    accumulatedElapsedGameTime;
    lastFrameElapsedGameTime;
    drawRunningSlowly = false;
    doneFirstUpdate = false;
    doneFirstDraw = false;
    forceElapsedTimeToZero = false;
    suppressDraw = false;
    content;
    spriteBatch;
    constructor() {
        this.maximumElapsedTime = new TimeSpan(0);
        this.content = new ContentManager();
        this.clock = new GameClock();
        this.maximumElapsedTime = this.maximumElapsedTime.FromMilliseconds(500.0);
        this.totalGameTime = new TimeSpan(0);
        this.accumulatedElapsedGameTime = new TimeSpan(0);
        this.lastFrameElapsedGameTime = new TimeSpan(0);
        this.targetElapsedTime.SetTicks(166667);
        this.inactiveSleepTime = this.inactiveSleepTime.FromMilliseconds(20.0);
    }
    Run(gameTime) {
        this.Draw(gameTime);
    }
    get GraphicsDevice() {
        return this.spriteBatch;
    }
    get Content() {
        return this.content;
    }
    set Content(value) {
        if (value == null) {
            console.log("ArgumentNullException");
        }
        this.content = value;
    }
    get MaxElapsedTime() {
        return this.maximumElapsedTime;
    }
    set MaxElapsedTime(value) {
        if (value.LessThan(0)) {
            console.log("The time must be positive.");
        }
        if (value.LessThan(this.targetElapsedTime.Ticks)) {
            console.log("The time must be at least TargetElapsedTime");
        }
    }
    get IsActive() {
        return this.isActive;
    }
    get IsMouseVisible() {
        return this.isMouseVisible;
    }
    set IsMouseVisible(value) {
        this.isMouseVisible = value;
    }
    get TargetElapsedTime() {
        return this.targetElapsedTime;
    }
    set TargetElapsedTime(value) {
    }
    get IsFixedTimeStep() {
        return this.isFixedTimeStep;
    }
    set IsFixedTimeStep(value) {
        this.isFixedTimeStep = value;
    }
    RunGame(useBlockingRun) {
        try {
            this.inRun = true;
            this.gameTime.ElapsedGameTime = this.gameTime.ElapsedGameTime.Zero;
            this.gameTime.TotalGameTime = this.totalGameTime;
            this.gameTime.IsRunningSlowly = false;
            this.Update(this.gameTime);
            this.doneFirstUpdate = true;
            if (useBlockingRun) { }
            else {
                this.endRunRequired = true;
            }
        }
        catch (ex) {
            alert(ex);
        }
        finally {
            if (!this.endRunRequired) {
                this.inRun = false;
            }
        }
    }
    get ShouldExit() {
        return this.exitRequested;
    }
    Tick() {
        requestAnimationFrame(this.Tick.bind(this));
        if (this.ShouldExit) {
            return;
        }
        this.clock.UpdateElapsedTime();
        let flag = true;
        let t = new TimeSpan(0);
        let timeSpan1 = this.clock.ElapsedAdjustedTime;
        if (timeSpan1 < t)
            timeSpan1 = t;
        if (this.forceElapsedTimeToZero) {
            timeSpan1 = t;
            this.forceElapsedTimeToZero = false;
        }
        if (timeSpan1.MoreThan(this.maximumElapsedTime.Ticks)) {
            timeSpan1 = this.maximumElapsedTime;
        }
        if (this.isFixedTimeStep) {
            if (Math.abs(timeSpan1.Ticks - this.targetElapsedTime.Ticks) < this.targetElapsedTime.Ticks >> 6) {
                timeSpan1 = this.targetElapsedTime;
            }
            let timeSpan2 = this.accumulatedElapsedGameTime.Add(timeSpan1);
            let num = Math.floor(timeSpan2.Ticks / this.targetElapsedTime.Ticks);
            this.lastFrameElapsedGameTime = this.lastFrameElapsedGameTime.Zero;
            if (num == 0) {
                return;
            }
            this.clock.AdvanceFrameTime();
            this.accumulatedElapsedGameTime = timeSpan2;
            let targetElapsedTime = this.targetElapsedTime;
            if (num > 1) {
                this.updatesSinceRunningSlowly2 = this.updatesSinceRunningSlowly1;
                this.updatesSinceRunningSlowly1 = 0;
            }
            else {
                if (this.updatesSinceRunningSlowly1 < this.int_MaxValue)
                    ++this.updatesSinceRunningSlowly1;
                if (this.updatesSinceRunningSlowly2 < this.int_MaxValue)
                    ++this.updatesSinceRunningSlowly2;
            }
            this.drawRunningSlowly = this.updatesSinceRunningSlowly2 < 20;
            while (num > 0 && !this.ShouldExit) {
                --num;
                try {
                    this.gameTime.ElapsedGameTime = targetElapsedTime;
                    this.gameTime.TotalGameTime = this.totalGameTime;
                    this.gameTime.IsRunningSlowly = this.drawRunningSlowly;
                    this.Update(this.gameTime);
                    flag = flag && this.suppressDraw;
                    this.suppressDraw = false;
                }
                finally {
                    this.accumulatedElapsedGameTime.Subtract(targetElapsedTime);
                    this.lastFrameElapsedGameTime = this.lastFrameElapsedGameTime.Add(targetElapsedTime);
                    this.totalGameTime = this.totalGameTime.Add(targetElapsedTime);
                }
            }
        }
        if (flag) {
            return;
        }
        this.DrawFrame();
    }
    DrawFrame() {
        try {
            if (this.ShouldExit || !this.doneFirstUpdate) {
                return;
            }
            this.gameTime.TotalGameTime = this.totalGameTime;
            this.gameTime.ElapsedGameTime = this.lastFrameElapsedGameTime;
            this.gameTime.IsRunningSlowly = this.drawRunningSlowly;
            this.Draw(this.gameTime);
            this.doneFirstDraw = true;
        }
        finally {
            this.lastFrameElapsedGameTime.Zero;
        }
    }
    Draw(gameTime) { }
    Update(gameTime) {
        this.doneFirstUpdate = true;
    }
    Initialize(caller) {
        caller.LoadContent();
    }
}
//# sourceMappingURL=game.js.map