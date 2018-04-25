import React from "react";

class ItemsModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content modal-auction-form">
                        <div class="modal-header">
                            <h5 class="modal-title text-light" id="exampleModalLabel">My Inventory</h5>
                        
                        </div>
                        <div class="modal-body">
                        
                        <ul className="row justify-content-center auction-form-modal-list">{this.props.items}</ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={this.props.handleModalSubmit} type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemsModal;