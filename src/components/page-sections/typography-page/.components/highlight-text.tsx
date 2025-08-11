"use client"
import { Tooltip } from 'react-tooltip';

const HighlightText = () => {
  return (
    <>
    <div className="highlight_text">
        <h5 className="h5 regular">Text Tooltips</h5>
        <p>
          He nicked it chip shop argy-bargy brilliant get stuffed mate
          absolutely bladdered smashing,{" "}
          <span
            className="tooltips_one"
            data-toggle="tooltip"
            data-placement="top"
            title="Your text here"
            data-tooltip-id="note-link-a"
            data-tooltip-content="Your text here"
          >
            vagabond codswallop tosser
          </span>
          <Tooltip
            id="note-link-a"
            style={{
              backgroundColor: "#4b5ffa",
              color: "#fff",
            }}
          />
          hunky-dory cheers in my flat bite your arm off, cracking goal up{" "}
          <span
            className="tooltips_two"
            data-toggle="tooltip"
            data-placement="top"
            title="Editar"
            data-tooltip-id="note-link-b"
            data-tooltip-content="Editar"
          >
            the duff cheeky bugger zonked why
          </span>
          <Tooltip
            id="note-link-b"
            style={{
              backgroundColor: "#ef971a",
              color: "#fff",
              padding: "0px 5px",
            }}
          />
          . Burke cras Richard grub say bits and bobs mush my lady tinkety tonk
          old fruit crikey fantastic vagabond, sloshed blower barney bender is
          bobby you mug daft argy-bargy.
        </p>
      </div>
    </>
  )
}

export default HighlightText