// outsource
import React from "react";

class OutsideClickHandler extends React.Component<any, any> {
    private childrenRefs: React.RefObject<any>[];
    constructor(props: any) {
        super(props);
        this.childrenRefs = React.Children.map(this.props.children, () => React.createRef());
    }

    handleClick = (e:any) => {
        const isOutside = this.childrenRefs.every(
            ref => !ref.current.contains(e.target));
        if (isOutside) {
            this.props.onClickOutside();
        }
    };

    componentDidMount() {
        document.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick);
    }

    render() {
        return React.Children.map(this.props.children, (element, idx) => {
            // @ts-ignore
            return React.cloneElement(element, { ref: this.childrenRefs[idx] });
        });
    }
}

export default OutsideClickHandler;