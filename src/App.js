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
        <p>This is not a real online service! You know you need something like this in your life to help you to realize your deepest dreams. Sign up <em>now</em> to get started.</p>
        <p>You <em>know</em> what you want</p>
      </div>
      <div className="container">
        <div className='middle'>
          <div id='legend'>Let's do this!</div>
          <form id='myForm'>
              <div className='flex-col'>
                <div id="form-ele">
                  <label For="first">FIRST NAME</label>
                  <input type="text" name="first" id="first" required/>
                </div>
                <div id="form-ele">
                  <label For="mail">EMAIL</label>
                  <input type="mail" name="mail" id="mail" required/>
                </div>
                <div id="form-ele">
                  <label For="pwd">PASSWORD</label>
                  <input type="password" name="pwd" id="pwd" required/>
                </div>
              </div>
              <div className='flex-col'>
                <div id="form-ele">
                  <label For="last">LAST NAME</label>
                  <input type="text" name="last" id="last" required/>
                </div>
                <div id="form-ele">
                  <label For="phone">PHONE NUMBER</label>
                  <input type="number" name="phone" id="phone" required/>
                </div>
                <div id="form-ele">
                  <label For="cpwd">CONFIRM PASSWORD</label>
                  <input type="password" name="cpwd" id="cpwd" required/>
                </div>
              </div>
          </form>
        </div>
      </div>
      <div className="create-account">
        <button id="create" type='submit' form='myForm'>Create Account</button>
      </div>
      <div className="login">
        <p>Already have an account?<a href="">Log in</a></p>
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
