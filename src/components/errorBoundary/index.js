import { Component } from "react";
import "./style.css";


class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }

    static getDerivedStateFromError(error) {
      return { error };
    }
  
  
    render() {
      if (this.state.error) {
        return(
            <div className="container">
                <p className="error">404</p>
                <p className="errorText">Page Not Found</p>
            </div>
        );
      }
  
      return this.props.children; 
    }
}


export default ErrorBoundary;