import React from 'react';

export default class NotifShutdowns extends React.Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane active" id="notifications">
                <table className='table table-borderless table-condensed table-hover'>
                    <tbody>
                    <tr>
                        <th>Отключение света <img className="icon-lamp" src={require("../../assets/img/lamp.png")}/></th>
                        <th>Сегодня</th>
                    </tr>
                    <tr>
                        <th> 2 часа <span className="glyphicon glyphicon-time"
                                          aria-hidden="true"></span></th>

                    </tr>
                    <tr>
                        <th className="reason">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Aspernatur aut consectetur cumque eveniet excepturi
                            explicabo fuga labore neque nulla possimus quas,
                            quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                        </th>

                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>Отключение газа <img className="icon-gas" src={require("../../assets/img/gas.png")}/></th>
                        <th>14.05.2017</th>
                    </tr>
                    <tr>
                        <th> 3 часа <span className="glyphicon glyphicon-time"
                                          aria-hidden="true"></span></th>

                    </tr>
                    <tr>
                        <th className="reason">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Aspernatur aut consectetur cumque eveniet excepturi
                            explicabo fuga labore neque nulla possimus quas,
                            quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                        </th>

                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>Отключение газа <img className="icon-gas" src={require("../../assets/img/gas.png")}/></th>
                        <th>14.05.2017</th>
                    </tr>
                    <tr>
                        <th> 3 часа <span className="glyphicon glyphicon-time"
                                          aria-hidden="true"></span></th>

                    </tr>
                    <tr>
                        <th className="reason">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Aspernatur aut consectetur cumque eveniet excepturi
                            explicabo fuga labore neque nulla possimus quas,
                            quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                        </th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>Отключение воды <img className="icon-water" src={require("../../assets/img/water.png")}/></th>
                        <th>14.05.2017</th>
                    </tr>
                    <tr>
                        <th> 3 часа <span className="glyphicon glyphicon-time"
                                          aria-hidden="true"></span></th>

                    </tr>
                    <tr>
                        <th className="reason">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aspernatur aut consectetur cumque eveniet excepturi
                            explicabo fuga labore neque nulla possimus quas,
                            quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                        </th>

                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}