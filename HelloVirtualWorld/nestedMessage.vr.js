import React from "react";
import {Text, VrButton, View} from "react-vr";

class NestedMessage extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 1;
        // this.startCount();
        this.state = {
            message: props.message,
            showMessage: true
        };

        this.handlClick = this
            .handlClick
            .bind(this);
    }

    // startCount() {     setInterval(() => {         this.counter += 1;
    // this.setState({message: this.counter});     }, 1000); }

    // componentDidMount() {
    //     this.setState({message: "Mounted"});
    // }

    handlClick() {
        this.setState({message: "updated message"});
    }
    render() {
        return (
            <View>
                <VrButton onClick={this.handlClick}>
                    <Text
                        style={{
                            margin : 0.1,
                            height : 0.3,
                            backgroundColor : '#CF3C7E',
                            textAlign: "center"
                    }}>{this.state.message}</Text>
                </VrButton>
            </View>
        );
    }
}

export default NestedMessage;