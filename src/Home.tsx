import FlowSheet from '@/components/FlowSheet'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>Frontend developer curriculum</h1>
        <FlowSheet />
      </main>
      <footer>
        Made with 💪 by&nbsp;
        <a href="https://www.jhordyess.com" target="_blank">
          Jhordyess
        </a>
        <br />
        <a href="https://github.com/jhordyess/course-flowsheet-by-semester" target="_blank">
          👉 View on GitHub
        </a>
      </footer>
    </div>
  )
}
