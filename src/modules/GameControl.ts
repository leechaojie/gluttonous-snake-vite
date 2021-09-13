/**
 * 游戏控制器
 */

import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl {
  private snake: Snake
  private food: Food
  private scorePanel: ScorePanel

  // 存储移动方向
  private direction: string = ''

  // 游戏是否结束
  private isLive: boolean = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(10, 2)
    this.init()
  }

  // 初始化游戏
  init() {
    // 监听键盘
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  // 键盘按下相响应函数
  keydownHandler(event: KeyboardEvent) {
    // chrome/firefox  IE
    // ArrowUp         Up
    // ArrowDown       Down
    // ArrowLeft       Left
    // ArrowRight      Right
    console.log(event.key)

    // 修改 direction 属性
    this.direction = event.key

  }

  // 控制蛇的移动
  run() {
    // ArrowUp     向上 top  减小
    // ArrowDown   向上 top  增加
    // ArrowLeft   向上 left 减小
    // ArrowRight  向上 left 增加

    let X = this.snake.X
    let Y = this.snake.Y

    // 根据按键方向修改 X Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break

      case 'ArrowDown':
      case 'Down':
        Y += 10
        break

      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break

      case 'ArrowRight':
      case 'Right':
        X += 10
        break
    }

    this.checkEat(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (error) {
      this.isLive = false
      alert(`${error}, GAME OVER!`)
    }

    // 开启定时器
    this.isLive && setTimeout(() => {
      this.run()
    }, 300 - (this.scorePanel.gameLevel - 1) * 30)
  }

  // 检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    // 判断蛇的坐标是否与食物坐标重合
    if (X === this.food.X && Y === this.food.Y) {
      // 食物位置改变
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      // 增加蛇身体
      this.snake.addBody()
    }
  }
}

export default GameControl