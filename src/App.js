import Video from './components/video.js'
function App() {
  return (

    <>
      <div>Hello</div>
      {/* attributes in javascript used here as "PROPS" */}

      {/* same component can be pass or use multiple times */}
      <Video title = "React Js tutorial"></Video>
      <Video title = "Node Js tutorial"></Video>
    </>
  )
}

export default App;
