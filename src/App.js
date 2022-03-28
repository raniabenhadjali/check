import './App.css';
import img2 from './img2.jpg';


function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black'}}>

<h1 className="title">Your name here</h1>

<br/ >

<img src={img2} />

<br/ >

<img src="/img1.jpg" />


<video width="320" height="240" controls>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VQc613pd-2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</video>
</div>
      
   </div>
  );
}

export default App;
