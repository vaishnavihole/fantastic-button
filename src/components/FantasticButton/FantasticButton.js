import React from 'react';

function FantasticButton({
    theme,
    text,
    height,
    width,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    fontSize,
}) {

    const BTN_BG_COLORS = {
        'dark': '#000000',
        'light': '#ffffff',
        'tomato': '#ff3333',
        'chilly': '#2eb82e',
        'orange': '#ffbb33'
    }

    const BTN_TEXT_COLORS = {
        'dark': '#ffffff',
        'light': '#000000',
        'tomato': '#ffffff',
        'chilly': '#ffffff',
        'orange': '#000000'
    }

    const buttonStyle = {
        backgroundColor: BTN_BG_COLORS[theme],
        color: BTN_TEXT_COLORS[theme],
        height: height || 'auto',
        width: width || 'auto',
        margin: margin || '10px',
        marginLeft: marginLeft || 'auto',
        marginRight: marginRight || 'auto',
        marginTop: marginTop || 'auto',
        marginBottom: marginBottom || 'auto',
        padding: padding || '10px',
        paddingLeft: paddingLeft || 'auto',
        paddingRight: paddingRight || 'auto',
        paddingTop: paddingTop || 'auto',
        paddingBottom: paddingBottom || 'auto',
        fontSize: fontSize || '18px',
        borderRadius: '15px',
    }

    return (
        <button type='button' style={buttonStyle}>
            {text}
        </button>
    )
}

export default FantasticButton