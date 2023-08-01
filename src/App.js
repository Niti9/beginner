import Video from './components/video.js'
function App() {
  return (

    <>
      <div>Hello</div>
      {/* attributes in javascript used here as "PROPS" */}

      {/* same component can be pass or use multiple times */}
      <Video bgColor="Red" title="React Js tutorial"></Video>
      <Video bgColor="Green" title="Node Js tutorial"></Video>
    </>
  )
}

export default App;
