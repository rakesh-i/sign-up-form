import back from './background.jpg'
import './App.css';
import logo from './odin-lined.png'

function Sidebar(){
  return(
    <div className='sidebar'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <p>ODIN</p>
      </div>
      <div className="credit">
        <p>Photo by <a href="https://unsplash.com/@haliewestphoto">Halie West</a> on <a href="https://unsplash.com/photos/green-leaf-plant-in-close-up-photography-25xggax4bSA">Upsplash</a></p>
      </div>
    </div>
  );
}

function Content(){
  return(
    <div className='content'>
      <div className="header">
        <p>
          This is not a real online service! You know you need something like this in your life to help you to realize your deepest dreams. Sign up <em>now</em> to get started.
        </p>
        <p>You <em>know</em> what you want</p>
      </div>
      <div className="middle">
        <div className="container">
        <form action="">
          <div id='legend'><p>Let's do this!</p></div>
          <div className='form'>
            <div className='flex-col'>
              <div id="form-ele">
                <label For="first">FIRST NAME</label>
                <input type="text" name="first" id="first" />
              </div>
              <div id="form-ele">
                <label For="mail">EMAIL</label>
                <input type="mail" name="mail" id="mail" />
              </div>
              <div id="form-ele">
                <label For="pwd">PASSWORD</label>
                <input type="password" name="pwd" id="pwd" />
              </div>
            </div>
            <div className='flex-col'>
              <div id="form-ele">
                <label For="last">LAST NAME</label>
                <input type="text" name="last" id="last" />
              </div>
              <div id="form-ele">
                <label For="phone">PHONE NUMBER</label>
                <input type="number" name="phone" id="phone" />
              </div>
              <div id="form-ele">
                <label For="cpwd">CONFIRM PASSWORD</label>
                <input type="pwd" name="cpwd" id="cpwd" />
              </div>
            </div>
          </div>
          <button>Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
