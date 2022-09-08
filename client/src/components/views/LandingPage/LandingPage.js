import React from 'react';

function LandingPage() {
  const dispatch = useDispatch();
  const [Email, setEamil] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEamil(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push('/');
      } else {
        alert('ERROR');
      }
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>시작페이지</h2>
    </div>
  );
}

export default LandingPage;
