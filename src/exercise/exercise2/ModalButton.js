import React from "react";
import Modal from "./Modal";

/*
 * ModalButton
 *
 * Aufgabe:
 *   Wenn auf den Button geklickt wurde, soll das Modal geöffnet werden.
 *   Sobald im Modal auf close gedrückt wurde, soll es wieder geschlossen werden.
 */
export default class ModalButton extends React.Component {
    state = {
        open: false
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleToggle}>Open!</button>
                {this.state.open && <Modal handleToggle={this.handleToggle} test='test'>Hallo Welt</Modal>}
            </React.Fragment>
        );
    }
}
