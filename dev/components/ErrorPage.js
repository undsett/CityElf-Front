import React from 'react';

export default () => (
        <div  className="error-page" style={{paddingTop: '50px'}}>
            <h3 className="num-error">404</h3> <img src={require("../assets/img/smile.png")}/>
            <p>Эта страница недоступна. Возможно, вы воспользовались недействительной ссылкой или страница была удалена.</p>
        </div>
)