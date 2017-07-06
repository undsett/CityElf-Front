import React from 'react';

export default class ModalLoginForm extends React.Component{
    render() {
        return (
            <div id="modal-login-form" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                 aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-5 col-sm-5 img-form-login">
                                        <h1>CityElf</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, at atque blanditiis
                                            consequuntur distinctio dolorem doloremque error eum excepturi iste laudantium minima
                                            odio omnis
                                            praesentium quasi repellendus rerum similique voluptatum!Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Asperiores, at atque blanditiis consequuntur distinctio
                                            dolorem doloremque error eum excepturi iste laudantium minima odio omnis
                                            praesentium quasi repellendus rerum similique voluptatum!</p>
                                    </div>

                                    <div className="col-md-3 col-sm-3 container-login-form">
                                        <h2>
                                            Регистрация
                                        </h2>
                                        <div className="form-group">
                                            <input type="email"className="form-control" placeholder="Email*"/>
                                            <input type="text" className="form-control" placeholder="Телефон"/>
                                            <input type="password" className="form-control" placeholder="Пароль*"/>
                                            <button id="sign-up" type="submit" className="btn btn-default form-control">Регистрация
                                            </button>
                                            <div><strong>*-Обязательные для заполнения поля</strong></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 container-for-register-user">
                                        <h2>
                                            Вход
                                        </h2>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email или телефон"/>
                                            <input type="password" className="form-control" placeholder="Пароль"/>
                                            <button id="sign-in" type="submit" className="btn btn-default sign-in-btn form-control">
                                                Войти
                                            </button>
                                            <div className="checkbox">
                                                <label><input type="checkbox" value=""/>Запомнить меня</label>
                                            </div>
                                            <a href="#">Забыли пароль?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


















