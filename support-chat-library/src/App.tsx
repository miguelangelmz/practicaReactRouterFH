import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button variant="default" size="lg">  Click me</Button>
      <Button variant="secondary" size="sm">  Click me</Button>
    </>
  )
}

export default App
