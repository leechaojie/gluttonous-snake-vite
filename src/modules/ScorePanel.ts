/**
 * 计分牌
 */
class ScorePanel {
  private score: number = 0 // 分数
  private level: number = 1 // 等级
  private scoreEle: HTMLElement
  private levelEle: HTMLElement
  private maxLevel: number // 等级限制
  private upScore: number // 升级分数

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  public get gameLevel() : number {
    return this.level
  }

  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  // 等级提升
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel