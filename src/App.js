import back from './background.jpg'
import './App.css';
import logo from './odin-lined.png'


function Sidebar(){
  return(
    <>
      <div className='sidebar'>
        {/* <img src={back} alt="background" /> */}
        <div className='logo'>
          <img src={logo} alt="logo" />
          <p>ODIN</p>
        </div>
      </div>
    </>
  );
}

function Content(){
  return(
    <div>
    <div>
      <p>
        This is not a real online service! You know you need something line this in your life to help you realize your deepest dreams. Signup <strong>now</strong> to get started.
      </p>
      <p>You <strong>know</strong> you want to.</p>
    </div>
    <div >
      <form action="">
        <div className='middle'>
          <p>Let's do this!</p>
          <div className='info'>
            <div className='col1'>
              <div>
                <label For="first">FIRST NAME</label>
                <input type="text" name="first" id='first' required/>
              </div>
              <div>
                <label For="mail">EMAIL</label>
                <input type="email" name='mail' id='mail' required/>
              </div>
              <div>
                <label For="pwd">PASSWORD</label>
                <input type="password" name="pwd" id='pwd' required/>
              </div>
            </div>
            <div className='col2'>
              <div>
                <label For="last">LAST NAME</label>
                <input type="text" name='last' id='last' required/>
              </div>
              <div>
                <label For="phone">PHONE NUMBER</label>
                <input type="number" name='phone' id='phone' required/>
              </div>
              <div>
                <label For="pwdc">CONFIRM PASSWORD</label>
                <input type="password" name='pwdc' id='pwdc' required/>
              </div>
            </div>
          </div>
          
        </div>
        <button type="submit" id='create'>Create Account</button>
      </form>
    </div>
    <div></div>
    </div>
  );
}

function App() {
  return (
    <div className='page'>
      <Sidebar/>
      <Content />
    </div>
  );
}

export default App;
