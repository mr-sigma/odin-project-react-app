function Greeting() {
  return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
}

export function Food() {
  return <h2>Pizza</h2>
}

export function BedTime() {
  return <h2>10:00PM</h2>
}

export function SingleChildComponent() {
  return <>
    <h2>Fragment</h2>
    <p>This should render because it is a fragment</p>
  </>
}

export default Greeting
