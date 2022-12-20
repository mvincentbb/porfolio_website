import React, {useEffect, useState} from 'react';
import Header from '../components/header/header';



export default function About(){

    const [count, setCount] = useState(0)
    // const addCount = ()=> setCount(count + 1)

    useEffect(() => {
        // Access count value from session storage

        var pageView = sessionStorage.getItem("pageView")
        if (pageView == null) {
            // Initialize page views count
            pageView = 1;
        } else {
            // Increment count
            pageView = Number(pageView) + 1;
        }
        // Update session storage
        sessionStorage.setItem("pageView", pageView);
        setCount(pageView);
    }, []); //No dependency to trigger in each page load

    return(


        <div>
            <Header/>
            {/*{onload() = ()=> setCount(count+ 1)}*/}
            {/*onClick={() => setCount(count + 1)}*/}
            <>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Vincent BAKPATINA  </title>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 3;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\ttext-indent: -1.7em;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 3rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n"
                    }}
                />
                <article id="31830723-b81e-4cea-af8e-16ddc19023bd" className="page sans">
                    <header>
                        <img
                            className="page-cover-image"
                            src="https://channellife.co.nz//uploads/story/2022/03/15/GettyImages-1338798118.webp"
                            style={{ objectPosition: "center 71.26%" }}
                        />
                        <div className="page-header-icon page-header-icon-with-cover">

                            {/* <img */}
                            {/*    className="icon" */}
                            {/*    style={{"icon":{"display":"inline-block","maxWidth":"1.2em","maxHeight":"1.2em","textDecoration":"none","verticalAlign":"text-bottom","marginRight":"0.5em"},"img_icon":{"borderRadius":"3px"}}} */}
                            {/*    src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F396f78e4-12c6-4967-94a6-b0d1e0a92a3c%2FGroup_3.png?table=block&id=31830723-b81e-4cea-af8e-16ddc19023bd&spaceId=0c602fc6-0847-44c0-b7c8-791a0e869191&width=250&userId=8bf59343-bc16-4d4e-9bc3-4769678ff9b0&cache=v2" */}
                            {/* /> */}
                        </div>
                        <h1 className="page-title">Vincent BAKPATINA {count}</h1>
                    </header>
                    <div className="page-body">
                        <h3 id="a4a95dcc-2fee-411a-84cd-38ea5cec4ac3" className="">
                            <strong>Web Developer | Devops Engineer</strong>
                        </h3>
                        <p id="746d5dd6-1637-43b4-bd06-6e87aec07ff1" className=""></p>
                        <hr id="81c4747d-70b7-4ef7-a1cf-04aa223bcabf" />
                        <div id="140e0b20-b1f4-41d7-96d9-ea380d1d0bff" className="column-list">
                            <div
                                id="85429d2e-7337-4c9f-97dd-71fe78393fa8"
                                style={{ width: "68.75%" }}
                                className="column"
                            >
                                <h1 id="298734bb-a985-46a1-b408-a758b6f53f83" className="">
                                    <details open="">
                                        <summary>
                                            <mark className="highlight-blue">About me</mark>
                                        </summary>
                                    </details>
                                </h1>
                                <div className="indented">
                                    <ul
                                        id="89a0fc0b-d207-4407-8579-e48eabbb5cee"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            4 years of Java, 3 years Kotlin, 3 years of JavaScript and
                                            Python{" "}
                                        </li>
                                    </ul>
                                    <ul
                                        id="f2c3573b-e9b7-4268-944f-628a20739c52"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            I focus on devops engineering using AWS, Terraform, Docker and Kubernetes for
                                            my work
                                        </li>
                                    </ul>
                                    <ul
                                        id="82289d76-8306-4f6b-8608-3b823341c5de"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            I also do remote consulting for software implementation in
                                            non-profit organizations
                                        </li>
                                    </ul>
                                </div>
                                <h1 id="ee65b71f-f14e-4cd4-85ee-cc4e8debd5f3" className="">
                                    <details open="">
                                        <summary>
                                            <mark className="highlight-blue">Work Experience </mark>
                                        </summary>
                                    </details>
                                </h1>
                                <div className="indented">
                                    <h2 id="d9b494ab-f456-40be-acc1-bb28402be28a" className="">
                                        Software Developer, Cloud Devops
                                    </h2>
                                    <h3 id="ea765df3-56c6-421a-b0c8-3ad0dafdf7b2" className="">
                                        VB FATAD
                                    </h3>
                                    <p id="69246ba3-689c-42f0-85bb-9eff923bf423" className="">
                                        <em>
                                            <strong>01/2021 - Now</strong>
                                        </em>
                                        <strong>
                                            ,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </strong>
                                        <em>
                                            <strong>Lome, Togo</strong>
                                        </em>
                                    </p>
                                    <ul
                                        id="847d5d9b-d865-467c-baa9-317097c86d43"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Built 50 % of the REST API backend with NodeJS and MongoDB for
                                            NoSQL database
                                        </li>
                                    </ul>
                                    <ul
                                        id="1b268b57-3c35-4ad6-a829-d9ec8279ad61"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Write the GitAction Pipeline
                                        </li>
                                    </ul>
                                    <ul
                                        id="f3a4de0b-35ff-46b9-9ae4-2488d1c8f907"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Provided Continuous Integration and Continuous Delivery with
                                            GitHub, GitAction for the backend{" "}
                                        </li>
                                    </ul>
                                    <ul
                                        id="ef5c09fc-280d-40fe-a507-817e8b905bda"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Provided Continuous Integration and Continuous Delivery with
                                            GitHub and Codemagic for the mobile android version
                                        </li>
                                    </ul>
                                    <ul
                                        id="ffb92b2a-8a80-4cb2-9ffe-36710f97937a"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Prototyped the UI/UX of the mobile version of the application of
                                            a fundraising application
                                        </li>
                                    </ul>
                                    <ul
                                        id="5d1d83ac-00dc-4810-a4fc-585cce67059c"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Monitored backend with PM2
                                        </li>
                                    </ul>
                                    <ul
                                        id="2f3082f4-0463-4cec-963f-5fe50c0f5a56"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Migrated the backend from Linode Cloud to AWS{" "}
                                        </li>
                                    </ul>
                                    <ul
                                        id="5b9d321c-8083-4d49-9122-2673f8861b3c"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Implemented the double factor authentication for the android
                                            version
                                        </li>
                                    </ul>
                                    {/* <p id="28d3064d-afe4-4823-8948-6c3f53b2a764" className=""> */}
                                        {/* <a href="https://www.vbfatad.org/">https://www.vbfatad.org</a> */}
                                    {/* </p> */}
                                    <h2 id="ffd5d74a-fb43-4f95-a35f-4b09eec3dac2" className="">
                                        Consultant in MedTech
                                    </h2>
                                    <h3 id="cc09c510-5852-4f80-9ade-73df772c9e13" className="">
                                        BYOME HEALTH (USA)
                                    </h3>
                                    <p id="1fe7a797-5de6-4ca8-8a21-a93a1b0e4d6b" className="">
                                        <em>
                                            <strong>10/2021 – 06/2022</strong>
                                        </em>
                                        <strong>
                                            ,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </strong>
                                        <em>
                                            <strong>Remote work</strong>
                                        </em>
                                    </p>
                                    <ul
                                        id="26218a6d-8ab5-46ad-acd8-3616ea56402d"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Provided feedback and informed the design and user experience of
                                            a mobile application targeted to patients
                                        </li>
                                    </ul>
                                    <ul
                                        id="9c64d3cc-99f4-4d4d-b74b-ad9a13c3b7a8"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Provided information and recommendations about regulations and
                                            day-to-day activities of healthcare organizations
                                        </li>
                                    </ul>
                                    <p id="4b227d42-8751-4154-9b54-6cc157457865" className="">
                                        {/* <a href="https://byome.health/">https://byome.health/</a> */}
                                    </p>
                                    <h2 id="73c38752-b3bf-4c2e-a89b-0c73d030314a" className="">
                                        Java Backend Developer Ipnet{" "}
                                    </h2>
                                    <p id="edd3220e-a8a6-4cd6-816f-1e67534dabc8" className="">
                                        <strong>01/2020 - 12/2020,</strong>
                                    </p>
                                    <ul
                                        id="1893a22a-8b8e-4c22-b65a-5a6d1bb0a760"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Implemented of a module to manage courses and teachers students
                                        </li>
                                    </ul>
                                    <ul
                                        id="4f38e031-9a70-4e6f-991b-de472a2d9b58"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Realized of 50% of the REST API with Spring Boot framework
                                        </li>
                                    </ul>
                                    <ul
                                        id="3206f6d0-aca8-47f2-b9ea-7ed49a3be128"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Continuous integration and continuous deployment with GitHub,
                                            Jenkins and AWS
                                        </li>
                                    </ul>
                                    <ul
                                        id="6b9fdb76-03a0-4388-a75f-64c84f6747dc"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Wrote the API documentation with Swagger
                                        </li>
                                    </ul>
                                    <ul
                                        id="5e9c42ae-fb3a-438f-9249-f2ae5c7e30aa"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}>
                                            Implemented unit tests with Junit
                                        </li>
                                    </ul>
                                    <p id="be2d9163-75ef-422f-b0f8-9ebce49db147" className=""></p>
                                </div>
                            </div>
                            <div
                                id="c4a5a20f-984a-41f7-8cd4-c8ea7ea1b1f7"
                                style={{ width: "31.25%" }}
                                className="column"
                            >
                                <p id="64ef30f8-6307-4d8e-9839-6153c538646a" className=""></p>
                                <h2 id="b6d8c98d-9a3b-430b-bd2b-dd775eab6a1c" className="">
                                    <mark className="highlight-blue">Contact</mark>
                                </h2>
                                <p id="e88d9ed1-f15e-409a-8a0e-c74c3d57e532" className="">
                                    <code>
                                        <mark className="highlight-blue">T</mark>
                                    </code>
                                    <mark className="highlight-blue"> </mark>: 00 228 96 04 14 19
                                </p>
                                <p id="b764dfec-a786-4faf-9cb0-1d9ff2d238ad" className="">
                                    <code>
                                        <mark className="highlight-blue">em</mark>
                                    </code>
                                    <mark className="highlight-blue"> </mark>:
                                    vincent.bakpatina@gmail.com
                                </p>
                                <p id="c030b968-f970-4ead-b53e-5f46f8e59979" className="">
                                    <mark className="highlight-blue">
                                        <code>ln</code>
                                    </mark>
                                    <mark className="highlight-blue"> </mark>:{" "}
                                    <a href="http://linkedin.com/in/vincent-bakpatina">
                                        vincent-bakpatina
                                    </a>
                                </p>
                                <p id="757d4440-b720-4600-98e0-8cd025244280" className="">
                                    <code>
                                        <mark className="highlight-blue">Tw</mark>
                                    </code>
                                    <mark className="highlight-blue"> </mark>:{" "}
                                    <a href="https://twitter.com/mvincentpaul">@mvincentpaul</a>
                                </p>
                                <p id="8eccbff0-979e-44cc-90d0-096e235dbecf" className=""></p>
                                <h2 id="abaeebef-cf95-40bd-94b5-1beba887f4e9" className="">
                                    <mark className="highlight-blue">Education</mark>
                                </h2>
                                <p id="ab4b27be-58d1-42df-8f4b-db743b260f1e" className="">
                                    <strong>Bachelor in Software Engineering</strong>
                                </p>
                                <p id="ad799c29-29d8-482d-8777-f803e7053005" className="">
                                    <em>
                                        <strong>2017-2021</strong>
                                    </em>
                                </p>
                                <p id="e7c89fc9-0d5f-4ee6-a524-9adc3f734a60" className="">
                                    <a href="https://www.ipnetuniversity.com/#/">IIT</a>
                                </p>
                                <h2 id="2586c793-a53b-4237-868a-1ad2aa3440f5" className="">
                                    <mark className="highlight-blue">Skills</mark>
                                </h2>
                                <ul
                                    id="8045045d-3869-4885-b4ee-789790c0df6f"
                                    className="bulleted-list"
                                >
                                    <li style={{ listStyleType: "disc" }}>
                                        JavaScript (NodeJS, ExpressJS, ReactJS), Python
                                    </li>
                                </ul>
                                <ul
                                    id="d509ec63-acad-4b46-b76b-def6374acf0e"
                                    className="bulleted-list"
                                >
                                    <li style={{ listStyleType: "disc" }}>
                                        Java, Kotlin (Android), Dart (Flutter)
                                    </li>
                                </ul>
                                <ul
                                    id="59363837-9913-40f5-9882-179fc4853dbf"
                                    className="bulleted-list"
                                >
                                    <li style={{ listStyleType: "disc" }}>Linux (Ubuntu, CentOs), Bash, Shell</li>
                                </ul>
                                <ul
                                    id="2754ab2d-5d8b-4f49-a35c-277ff2b8d132"
                                    className="bulleted-list"
                                >
                                    <li style={{ listStyleType: "disc" }}>Docker, Kubernetes</li>
                                </ul>
                                <ul
                                    id="31f2e594-036c-42c9-bc28-bbf303e85449"
                                    className="bulleted-list"
                                >
                                    <li style={{ listStyleType: "disc" }}>
                                        SQL (MySQL, PostgreSQL), MongoDB
                                    </li>
                                </ul>
                                <ul
                                    id="dcd68d00-ef4c-4e62-9f61-590363b20e18"
                                    className="bulleted-list"
                                >
                                    <li style={{ listStyleType: "disc" }}>Git, GitHub, Git</li>
                                </ul>
                                <ul
                                    id="e6072c39-d059-4481-b2e2-e708e4f8aa8c"
                                    className="bulleted-list"
                                >
                                    <li style={{ listStyleType: "disc" }}> Heroku, Linode, AWS</li>
                                </ul>
                                <ul
                                    id="c445a373-cc5a-4604-85b6-b2312c2360cd"
                                    className="bulleted-list"
                                >
                                    <li style={{ listStyleType: "disc" }}>Scrum, Agile</li>
                                </ul>
                                {/* <h2 id="10c80d9d-64fe-41f4-957f-4e4e2b42f199" className=""> */}
                                {/*    <mark className="highlight-blue">Language</mark> */}
                                {/* </h2> */}
                                {/* <p id="1197e055-e0c8-4df1-9152-33bda745dbd3" className=""> */}
                                {/*    French | Native */}
                                {/* </p> */}
                                {/* <p id="3b590111-af1b-4681-a1ec-f932191fe4d8" className=""> */}
                                {/*    ⬛⬛⬛⬛⬛⬛⬛⬛⬛ */}
                                {/* </p> */}
                                {/* <p id="5375bbea-cb81-4e59-927c-43b7cc23ca75" className=""> */}
                                {/*    English | CEFR B2 */}
                                {/* </p> */}
                                {/* <p id="8482df62-1db8-4065-8439-5d2bd523a71c" className=""> */}
                                {/*    ⬛⬛⬛⬛⬛⬛⬛⬜⬜ */}
                                {/* </p> */}
                                <p id="8eccbff0-979e-44cc-90d0-096e235dbecf" className=""></p>
                                <h2 id="abaeebef-cf95-40bd-94b5-1beba887f4e9" className="">
                                    <mark className="highlight-blue">Certification</mark>
                                </h2>

                                <p id="331153b0-5072-41ee-ad19-ceda0127bdbf" className="">
                                    <ul
                                        id="dcd68d00-ef4c-4e62-9f61-590363b20e18"
                                        className="bulleted-list"
                                    >
                                        <li style={{ listStyleType: "disc" }}> <a rel="noopener noreferrer" href= "https://www.credly.com/badges/e6e1e332-c5ab-4c6f-8ef7-bc5f3139ef7d/public_url"> AWS Solution Architect Associate</a></li>
                                    </ul>
                                </p>
                                <p id="26d6c9bc-6da0-4946-b9c3-043d4ee24479" className=""></p>
                                <p id="d2c0cc84-88c5-46ec-83cd-b1a75941fc0d" className=""></p>
                            </div>
                        </div>
                        <h1 id="967f3bde-e31f-49f7-9023-6097349aec1f" className="">
                            <details open="">
                                <summary>
                                    <mark className="highlight-blue">PERSONAL PROJECTS</mark>
                                </summary>
                            </details>
                        </h1>
                        <div className="indented">
                            <h2 id="befa4e55-a595-4108-be1e-4d0f741cce1c" className="">
                                BlogPost : Android application
                            </h2>
                            <ul id="ed651073-76df-45cd-abd4-70e583186ba1" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>
                                    Built an android app to consume a REST API demo blog post
                                </li>
                            </ul>
                            <ul id="b440a353-09fa-4ef0-bf6e-27aaebef2f1b" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>
                                    Implemented the MVVM (Model View View Model) architecture
                                </li>
                            </ul>
                            <ul id="0815accb-de5e-4b3a-8193-d348b16aadef" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>
                                    Designed the UI of the application based on Material design
                                </li>
                            </ul>
                            <ul id="3d422296-8982-4da1-9926-cabfa6db650b" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>
                                    Implemented data fetching using Retrofit and offline access with
                                    Room (SQLite) database
                                </li>
                            </ul>
                            <ul id="7c8e08fc-0a17-4e3d-9c4b-1bbbbeabaed1" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>
                                    Implemented dependency injection with Hilt
                                </li>
                            </ul>
                            <p id="861f70a7-fead-4738-9e2e-cb613d27c954" className="">
                                <a href="https://github.com/mvincentbb/POSTS">
                                    https://github.com/mvincentbb/POSTS
                                </a>
                            </p>
                            <h3 id="ff2cee88-34da-44ed-8844-6f882e3de231" className="">
                                <strong>Health Insurance Mobile</strong>
                            </h3>
                            <ul id="c285cd58-45bf-4347-9bfa-0ea0b82e68b3" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>
                                    Designed of a mobile application for a Health Insurance
                                </li>
                            </ul>
                            <p id="8d38627a-f3b9-4193-81a0-a83ab902567e" className="">
                                <a href="https://dribbble.com/mvinentbb">
                                    https://dribbble.com/mvinentbb
                                </a>
                            </p>
                            <p id="1cb881ab-2a81-4bcd-bd81-934348e85f87" className=""></p>
                        </div>
                        <p id="1b69eb92-8d1c-44da-bf6d-557171fc1072" className=""></p>
                    </div>
                </article>

                <p>                         <h3 className="">Number of page views :  {count}</h3>
                </p>
            </>

        </div>
    )
}