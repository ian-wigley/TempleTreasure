import {Game} from "../ts_lib/game.js"
import {SpriteBatch} from "../ts_lib/spriteBatch.js";
import {Level} from "./level.js"
import {TimeSpan} from "../ts_lib/timeSpan.js";
import {Vector2} from "../ts_lib/vector2.js";
import {GameTime} from "../ts_lib/gameTime.js";
import {Color} from "../ts_lib/color.js";
import {Controls} from "../ts_lib/controls.js";
import {TexturedButton} from "../out/ts_lib/texturedButton.js";

export enum GameState {
    DisplayMenu = 0,
    GameOn = 1,
    GameOver = 2
}

export class PlatformerGame extends Game {
    private graphics: any;
    private hudFont = "14px Arial";
    private mainMenuImage: HTMLImageElement | undefined;
    private startButtonImage: HTMLImageElement | undefined;

    private optionButton: HTMLButtonElement | undefined;
    private startButton: TexturedButton | undefined;

    private winOverlay: HTMLImageElement | undefined;
    private loseOverlay: HTMLImageElement | undefined;
    private diedOverlay: HTMLImageElement | undefined;
    private music: HTMLAudioElement | undefined;

    private levelIndex: number = -1;
    private level: Level | undefined;
    private wasContinuePressed: boolean = false;
    private WarningTime: TimeSpan = new TimeSpan(0);
    private TargetFrameRate: number = 60;
    private BackBufferWidth: number = 1280;
    private BackBufferHeight: number = 720;
    private keyPressed: Controls = new Controls();
    private gameState: GameState = GameState.DisplayMenu;
    private readonly m_gameTime: GameTime;

    public get Gametime(): GameTime {
        return this.m_gameTime;
    }

    constructor() {
        super();
        this.WarningTime.FromSeconds(30);
        // Frame rate differs between platforms.
        this.TargetElapsedTime.SetTicks(this.TargetElapsedTime.TicksPerSecond / this.TargetFrameRate);
        this.m_gameTime = new GameTime();
        this.LoadMenuContent();
        // this.LoadContent();
        this.ConfigureMenu();
    }

    protected LoadContent(): void {
        // this.spriteBatch = new SpriteBatch();
        // this.AddHitListener();
        // this.mainMenu = <HTMLImageElement>document.getElementById("MainMenu");
        this.winOverlay = <HTMLImageElement>document.getElementById("overlayWin");
        this.loseOverlay = <HTMLImageElement>document.getElementById("overlayLose");
        this.diedOverlay = <HTMLImageElement>document.getElementById("overlayDied");
        //this.music = <HTMLAudioElement>document.getElementById("Music");
        this.LoadNextLevel();
    }

    private LoadMenuContent(): void {
        this.spriteBatch = new SpriteBatch();
        this.AddHitListener();
        this.mainMenuImage = <HTMLImageElement>document.getElementById("mainMenu");
        this.startButtonImage = <HTMLImageElement>document.getElementById("startButton");
        this.music = <HTMLAudioElement>document.getElementById("Music");
    }

    private ConfigureMenu(): void {
        this.startButton = new TexturedButton(
            500,
            500,
            403,
            96,
            this.startButtonImage.src.toString(),
//            "Content/images/Buttons/Start_Button.png",
            () => {
                // this.LoadContent();
                // //this.music = <HTMLAudioElement>document.getElementById("Music");

                this.music.play().then(() => {
                    this.LoadContent();
                    // Todo reset all the game state variables!
                    while(!this.level.Loaded){
                    // while(this.level.Player==undefined){

                    }
                    this.level.Player.Lives = 3;
                    console.log("Playing");
                    this.gameState = GameState.GameOn;
                }).catch(err => console.error("Play failed:", err));

            }
        );
    }

    private AddHitListener(): void {
        window.addEventListener("keydown", (event) => {
            this.onKeyPress(event);
            return null;
        });

        window.addEventListener("keyup", (event) => {
            this.onKeyUp(event);
            return null;
        });

        window.addEventListener("click", (e) => {
            //const rect = window.i.getBoundingClientRect();
            this.startButton.click(
                e.clientX,// - rect.left,
                e.clientY// - rect.top
            );
        });
    }

    private onKeyPress(event: KeyboardEvent) {
        event.preventDefault();
        this.onKeyboardPress(event, false);
    }

    private onKeyUp(event: KeyboardEvent) {
        event.preventDefault();
        this.onKeyboardRelease(event, false);
    }

    private onKeyboardPress(event: KeyboardEvent, touchDevice: boolean) {
        switch (event.code) {
            case "ControlLeft":
                this.keyPressed.lcontrolPressed = true;
                break;
            case "ArrowLeft":
                this.keyPressed.left = true;
                break;
            case "ArrowUp":
                this.keyPressed.up = true;
                break;
            case "ArrowRight":
                this.keyPressed.right = true;
                break;
            case "ArrowDown":
                this.keyPressed.down = true;
                break;
            case "Enter":
                this.keyPressed.enterPressed = true;
                this.keyPressed.returnPressed = true;
                break;
            case "Space":
                this.keyPressed.spacePressed = true;
                break;
        }
    }

    private onKeyboardRelease(event: KeyboardEvent, touchDevice: boolean) {
        switch (event.code) {
            case "ControlLeft":
                this.keyPressed.lcontrolPressed = false;
                break;
            case "ArrowLeft":
                this.keyPressed.left = false;
                break;
            case "ArrowUp":
                this.keyPressed.up = false;
                break;
            case "ArrowRight":
                this.keyPressed.right = false;
                break;
            case "ArrowDown":
                this.keyPressed.down = false;
                break;
            case "Enter":
                this.keyPressed.enterPressed = false;
                this.keyPressed.returnPressed = false;
                break;
            case "Space":
                this.keyPressed.spacePressed = false;
                break;
        }
    }

    private HandleInput(): void {
        let continuePressed: boolean = this.keyPressed.spacePressed;
        if (!this.wasContinuePressed && continuePressed) {
            if (!this.level.Player.IsAlive) {
                this.level.StartNewLife();
            } else //if (this.level.TimeRemaining == TimeSpan.Zero) {
            if (this.level.ReachedExit) {
                this.LoadNextLevel();
            } else {
                this.ReloadCurrentLevel();
            }
        }
        //}
        this.wasContinuePressed = continuePressed;
    }

    private LoadNextLevel(): void {
        let levelPath: string;
        this.levelIndex = (this.levelIndex + 1) % 3;
        levelPath = "Content/images/Levels/" + this.levelIndex + ".txt";
        let tempScore: number = 0;
        if (this.level) {
            tempScore = this.level.Score;
        }
        this.level = new Level(null, levelPath, this.keyPressed, tempScore);
    }

    private ReloadCurrentLevel(): void {
        --this.levelIndex;
        this.LoadNextLevel();
    }

    public Run(gameTime: any): void {
        if (this.level.Loaded) {
            this.level.Update(gameTime);
            this.Draw(gameTime);
        }
    }

    public Update(gameTime: GameTime): void {
        if (this.gameState == GameState.DisplayMenu) {

        } else if (this.gameState == GameState.GameOn) {
            this.HandleInput();
            if (this.level.Loaded) {
                this.level.Update(gameTime);
            }
            super.Update(gameTime);
        }
    }

    public Draw(gameTime: GameTime): void {
        if (this.gameState == GameState.DisplayMenu) {
            this.DrawMenu();
        } else if (this.gameState == GameState.GameOn) {
            if (this.level.Loaded) {
                this.level.Draw(gameTime, this.spriteBatch);
                this.DrawHud();
            }
        }
    }

    private DrawHud(): void {
        let hudLocation: Vector2 = new Vector2(0, 20);
        let center: Vector2 = new Vector2(this.spriteBatch.Canvas.width / 2, this.spriteBatch.Canvas.height / 2);
        let currentTime = this.level.TimeRemaining.Minutes.toString();
        let min: string = "";
        let sec: string = "";
        if (this.level.TimeRemaining.Minutes > 0) {
            let splitMin = currentTime.split(".");
            min = splitMin[0];
            let splitSec = this.level.TimeRemaining.Seconds.toString().split(".");
            sec = splitSec[0];
        }
        let timeString: string = "TIME: 0" + min + ":" + sec;
        let timeColor: any;
        if (this.level.TimeRemaining.MoreThan(this.WarningTime.Ticks) || this.level.ReachedExit || this.level.TimeRemaining.TotalSeconds % 2 == 0) {
            timeColor = Color.Yellow;
        } else {
            timeColor = Color.Red;
        }
        this.DrawShadowedString(this.hudFont, timeString, hudLocation, timeColor);
        const timeHeight: number = 40;
        this.DrawShadowedString(this.hudFont, "Score: " + this.level.Score, new Vector2(0.0, timeHeight * 1.2), Color.Yellow);
        this.DrawShadowedString(this.hudFont, "Lives: " + this.level.Player.Lives, new Vector2(0.0, 60.0), Color.Yellow);
        let status: HTMLImageElement = null;
        if (this.level.TimeRemaining.Ticks == 0) {
            if (this.level.ReachedExit) {
                status = this.winOverlay;
            } else {
                status = this.loseOverlay;
            }
        } else if (!this.level.Player.IsAlive) {
            if (this.level.Player.Lives > 0) {
                status = this.diedOverlay;
            } else {
                this.gameState = GameState.DisplayMenu;
            }

        }
        if (status != null) {
            let statusSize: Vector2 = new Vector2(status.width, status.height);
            this.spriteBatch.Draw(status, center.X - statusSize.X / 2, center.Y - statusSize.Y / 2);
        }
    }

    private DrawShadowedString(font: any, value: string, position: Vector2, color: any): void {
        this.spriteBatch.DrawString(font, value, new Vector2(position.X + 1, position.Y + 1), Color.Black);
        this.spriteBatch.DrawString(font, value, position, color);
    }

    private DrawMenu(): void {
        this.spriteBatch.Draw(this.mainMenuImage, 0, 0);
        this.spriteBatch.DrawButton(this.startButton);
    }
}
