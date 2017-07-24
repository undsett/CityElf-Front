import React from 'react';

export default class ImgMapStatic extends React.Component{
    render() {
        return (
            <div id="shut-note-for-adress" class="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Спасибо Вам!</h4>
                        </div>
                        <div className="modal-body">
                            <p>Ваш запрос принят и обрабатывается. После обработки он появится в списке адресов для
                                отслеживания отключений</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">OK</button>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



















