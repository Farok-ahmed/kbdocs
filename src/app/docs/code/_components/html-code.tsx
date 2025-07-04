const HtmlCode = () => {
  return (
    <>
      <div className="highlight">
        <div className="code-toolbar">
          <pre className=" language-html">
            <code className=" language-html" data-lang="html">
              For<span className="token space"> </span>example,
              <span className="token space"> </span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation"></span>
                </span>
                <span className="nt">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    <span className="token tag-id">code</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token punctuation"></span>
              </span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">
                    <span className="nt">&lt;</span>
                  </span>
                  <span className="token tag-id">section</span>
                </span>
                <span className="token punctuation">
                  <span className="ni">&gt;</span>
                </span>
              </span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation"></span>
                </span>
                <span className="nt">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    <span className="token tag-id">code</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token punctuation"></span>
              </span>
              <span className="token space"> </span>should
              <span className="token space"> </span>be
              <span className="token space"> </span>wrapped
              <span className="token space"> </span>as
              <span className="token space"> </span>inline.
            </code>
          </pre>
          <div className="toolbar">
            <div className="toolbar-item">
              <span>HTML</span>
            </div>
            <div className="toolbar-item">
              <button>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HtmlCode;
