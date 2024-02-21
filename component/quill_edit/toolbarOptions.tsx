import { HaftDrowTop } from "@/public/brand"
import { icons } from "antd/es/image/PreviewGroup"
import { Quill } from "react-quill";
require('react-quill/dist/quill.snow.css'); // CommonJS
import 'react-quill/dist/quill.snow.css'; 


const colors = ["red","green","blue","orange","violet"]
const formats = [
    [
        {
            className:"ql-font",
            icon: <HaftDrowTop className={``}/>,
            options:['serif','monospace', ] as any
        },
        {
            className:"ql-size",
            options:['14px', '16px', '18px'] as any
        }
    ],
    [
        {className:"ql-bold"},{className:"ql-italic"},
        // {className:"ql-underline"},{className:"ql-strike"}
    ],
    // [
    //     {
    //         className:"ql-color",
    //         options:colors
    //     },
    //     {
    //         className:"ql-background",
    //         options:colors
    //     }
    // ],
    // [
    //     {
    //         className:"ql-script",
    //         value:"sub"
    //     },
    //     {
    //         className:"ql-script",
    //         value:"super"
    //     }
    // ],
    // [
    //     {
    //         className:"ql-header",
    //         value:"1"
    //     },
    //     {
    //         className:"ql-header",
    //         value:"2"
    //     },
    //     {
    //         className:"ql-blockquote"
    //     },
    //     {
    //         className:"ql-code-block"
    //     }
    // ],
    // [
    //     {
    //         className:"ql-list",
    //         value:"ordered"
    //     },
    //     {
    //         className:"ql-list",
    //         value:"bullet"
    //     },
    //     {
    //         className:"ql-indent",
    //         value:"-1"
    //     },
    //     {
    //         className:"ql-indent",
    //         value:"+1"
    //     }
    // ],
    // [
    //     {
    //         className:'ql-direction',
    //         value:'rtl'
    //     },
    //     {
    //         className:'ql-align',
    //         options:['right','center','justify'] as any
    //     }
    // ],
    // [
    //     {className:'ql-link'},{className:'ql-image'},{className:'ql-video'},{className:'ql-formula'}
    // ],

]

export default formats