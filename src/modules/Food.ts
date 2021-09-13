/**
 * 食物
 */
class Food {
  private element: HTMLElement


  constructor() {
    this.element = document.getElementById('food')!
  }

  // 获取食物 x 轴坐标
  get X() {
    return this.element.offsetLeft
  }

  // 获取食物 y 轴坐标
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物位置
  change() {
    // 生成一个随机位置
    // 游戏舞台的宽高为 300px，蛇头为 10px，所以范围为 0 - 290
    // 蛇每次移动 10px， 所以要取到10的倍数
    const left = Math.round(Math.random() * 29) * 10
    const top = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

export default Food