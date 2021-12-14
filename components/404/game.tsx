import { useEffect, useRef, useState } from "react"
import s from "./game.module.css"

export const Game = () => {
  const [over, setOver] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || over) return
    const canvas = canvasRef.current
    canvas.focus()
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let score = 0

    const ball = {
      r: 4,
      x: canvas.width / 2,
      y: canvas.height - 30,
      dx: 2,
      dy: -2,
    }

    const paddle = {
      width: 50,
      height: 4,
      move: 6,
      x: (canvas.width - 50) / 2,
    }

    const brick = {
      row: 5,
      column: 8,
      width: 48,
      height: 8,
      padding: 4,
      offsetTop: 36,
      offsetLeft: 36,
    }

    const control = {
      left: false,
      right: false,
    }

    const bricks: { x: number; y: number; live: boolean }[][] = []
    for (let c = 0; c < brick.column; c++) {
      bricks[c] = []
      for (let r = 0; r < brick.row; r++) {
        bricks[c][r] = { x: 0, y: 0, live: true }
      }
    }

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key == "Right" || e.key == "ArrowRight") {
        control.right = true
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        control.left = true
      }
    }

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key == "Right" || e.key == "ArrowRight") {
        control.right = false
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        control.left = false
      }
    }

    document.addEventListener("keydown", keyDownHandler, false)
    document.addEventListener("keyup", keyUpHandler, false)

    const drawScore = () => {
      ctx.font = "16px 'iA Writer Duospace'"
      ctx.fillStyle = "#525765"
      ctx.fillText(score.toString(), 8, 20)
    }

    const drawBall = () => {
      ctx.beginPath()
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2)
      ctx.fillStyle = "#525765"
      ctx.fill()
      ctx.closePath()
    }

    const drawPaddle = () => {
      ctx.beginPath()
      ctx.rect(
        paddle.x,
        canvas.height - paddle.height,
        paddle.width,
        paddle.height,
      )
      ctx.fillStyle = "#525765"
      ctx.fill()
      ctx.closePath()
    }

    const drawBricks = () => {
      for (let c = 0; c < brick.column; c++) {
        for (let r = 0; r < brick.row; r++) {
          if (bricks[c][r].live) {
            const brickX = c * (brick.width + brick.padding) + brick.offsetLeft
            const brickY = r * (brick.height + brick.padding) + brick.offsetTop
            bricks[c][r].x = brickX
            bricks[c][r].y = brickY
            ctx.beginPath()
            ctx.rect(brickX, brickY, brick.width, brick.height)
            ctx.fillStyle = "#525765"
            ctx.fill()
            ctx.closePath()
          }
        }
      }
    }

    const collisionDetection = () => {
      for (let c = 0; c < brick.column; c++) {
        for (let r = 0; r < brick.row; r++) {
          const b = bricks[c][r]
          if (b.live) {
            if (
              ball.x > b.x &&
              ball.x < b.x + brick.width &&
              ball.y > b.y &&
              ball.y < b.y + brick.height
            ) {
              ball.dy *= -1
              b.live = false
              score++
              if (score == brick.row * brick.column) {
                setOver(true)
                clearInterval(interval)
              }
            }
          }
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawScore()
      drawBricks()
      drawBall()
      drawPaddle()
      collisionDetection()

      if (
        ball.x + ball.dx > canvas.width - ball.r ||
        ball.x + ball.dx < ball.r
      ) {
        ball.dx *= -1
      }
      if (ball.y + ball.dy < ball.r) {
        ball.dy *= -1
      } else if (ball.y + ball.dy > canvas.height - ball.r) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
          ball.dy *= -1
        } else {
          setOver(true)
          clearInterval(interval)
        }
      }

      if (control.right) {
        paddle.x += paddle.move
        if (paddle.x + paddle.width > canvas.width)
          paddle.x = canvas.width - paddle.width
      } else if (control.left) {
        paddle.x -= paddle.move
        if (paddle.x < 0) paddle.x = 0
      }

      ball.x += ball.dx
      ball.y += ball.dy
    }

    const interval = setInterval(draw, 10)
  }, [over])

  return (
    <div className={s.container}>
      {over && (
        <div className={s.gameover}>
          <strong>Game over</strong>
          <button onClick={() => setOver(false)}>Play again</button>
        </div>
      )}
      <canvas ref={canvasRef} width={480} height={320} className={s.game} />
    </div>
  )
}
