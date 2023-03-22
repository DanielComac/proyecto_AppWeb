import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';

class Pdf extends Component {
  render() {
    return (
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <object
                    data={require('./componentes/curriculum.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    >
                </object>
            </div>
            
        );
    }
};

export default Pdf;