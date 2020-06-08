import React from "react";
import "./modal.css";
import ModalButton from "./ModalButton";

/*
 * Modal
 *
 * Aufgabe:
 *   Wenn jemand auf close drückt, dann mithilfe eines Properties (`this.props.onClose`) den Parent informiert werden.
 *
 * Bonus Aufgabe:
 *   Man kann Komponenten als Decorator verwenden. Zeige den inhalt des <Modal> Tag als Content an.
 *   Hints:
 *     `<Modal>Inhalt</Modal>`
 *     `this.props.children`
 */
export default class Modal extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div className="modal_layer">
                <div className="modal_box">
                    <div className="modal_content">
                        {this.props.children} {this.props.test}
                    </div>
                    <button onClick={this.props.handleToggle}>close</button>
                </div>
            </div>
        );
    }
}
