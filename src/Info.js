import React, {useState, useEffect} from 'react';

const Info = () => {
  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');
  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다!');
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });

  // useEffect(()=>{
  //   console.log('마운트때만 실행합니다.');
  // }, []);
  
  
  //업데이트될떄마다
  // useEffect(()=> {
  //   console.log(name);
  // }, [name]);


  //컴포넌트가 언마운트 되기전이나 업데이트되기직전에 작업하고 싶을때 뒷정리함수 반환
  // useEffect(()=>{
  //   console.log('effect');
  //   console.log(name);
  //   return () =>{
  //     console.log('cleanup');
  //     console.log(name);
  //   }
  // })

  //언마운트 될때만
  useEffect(()=> {
    console.log('effect');
    console.log(name);
    return ()=>{
      console.log('cleanup');
      console.log(name);
    }
  }, []);
  
  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeNickname =(e) =>{
    setNickname(e.target.value);
  }
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}/>
        <input value={nickname} onChange={onChangeNickname}/>
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;