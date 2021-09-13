/**
 * 蛇
 */
class Snake {
  private element: HTMLElement // 蛇的容器
  private head: HTMLElement // 蛇头
  public bodies: HTMLCollection // 蛇的身体（包括蛇头）
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇头 x 坐标
  get X() {
    return this.head.offsetLeft
  }

  // 获取蛇头 y 坐标
  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头 x 坐标
  set X(value: number) {
    // 新值与旧值相同，不再赋值
    if (this.X === value) return

    // 当第二节的位置等于传过来的第一节的位置时，就发生了掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      console.log('掉头了')
      // 掉头后向反方向移动，从而达到不掉头的效果
      if (value > this.X) {
        // 新值大于旧值(原来向左走，现在向右了)，发生掉头，让蛇继续向左走
        value = this.X - 10
      } else {
        value = this.X + 10
      }

    }

    // 限定范围 0 - 290
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了")
    }

    this.moveBody()
    this.head.style.left = value + 'px'
    // 检查是否撞到自己
    this.checkHeadBody()
  }

  //  设置蛇头 y 坐标
  set Y(value: number) {
    // 新值与旧值相同，不再赋值
    if (this.Y === value) return

    // 当第二节的位置等于传过来的第一节的位置时，就发生了掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log('掉头了')
      // 掉头后向反方向移动，从而达到不掉头的效果
      if (value > this.Y) {
        // 新值大于旧值(原来向左走，现在向右了)，发生掉头，让蛇继续向左走
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }

    // 限定范围 0 - 290
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了")
    }

    this.moveBody()
    this.head.style.top = value + 'px'

    // 检查是否撞到自己
    this.checkHeadBody()
  }

  // 蛇增加身体
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 身体移动
  moveBody() {
    // 将后边的身体设置为前面身体的位置，从后往前依次移动
    // 例如：四节蛇 最后一节 = 第三节位置，第三节 = 第二节位置 第二节 = 第一节位置

    // 遍历获取所有身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前面身体的位置
      const X = (this.bodies[i - 1] as HTMLElement).offsetLeft
      const Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
  }

  // 检查头与身体是否相撞
  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头坐标重叠
    for (let i = 1; i < this.bodies.length; i++) {
      const bd = this.bodies[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error("撞到自己了")
      }
    }
  }
}

export default Snake