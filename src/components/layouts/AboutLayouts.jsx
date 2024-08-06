const AboutLayouts = () => {
    return (
        <div className="about">
            <h2 className="h2"><em><u>People Who Inspire Me</u></em></h2>
            <p className="h2">Nah bro, i belive can <em><u>change the world</u></em></p>
            <div className="content">
                <div className="left">
                    <h2>Adolf Hitler</h2>
                    <p>1889 – 1945</p>
                </div>
                <div className="right">
                    <img src="./ht.png" alt="img" />
                </div>
            </div>
            <div className="content">
                <div className="left">
                    <img src="./sh.png" alt="img" />
                </div>
                <div className="right">
                    <h2>Saddam Hussein</h2>
                    <p>1937 - 2006</p>
                    {/* <audio controls>
                        <source src="path/to/your-audio-file.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio> */}
                </div>
            </div>
            <div className="content">
                <div className="left">
                    <h2>Fidel Castro</h2>
                    <p>1926 - 2016</p>
                </div>
                <div className="right">
                    <img src="./fc.png" alt="img" />
                </div>
            </div>
            <div className="content">
                <div className="left">
                    <img src="./cg.png" alt="img" />
                </div>
                <div className="right">
                    <h2>Che Guevara</h2>
                    <p>1928 - 1967</p>
                </div>
            </div>
            {/* <div className="content">
                <div className="left">
                    <h2>Lee Kuan Yew</h2>
                    <p>16 Sep 1923 – 23 Mar 2015</p>
                </div>
                <div className="right">
                    <img src="./lee.png" alt="img" />
                </div>
            </div>
            <div className="content">
                <div className="left">
                    <img src="./pe.png" alt="img" />
                </div>
                <div className="right">
                    <h2>undefine.</h2>
                    <p>undefine.</p>
                </div>
            </div> */}
            <div className="content">
                <div className="left">
                    <h2>Muammar khadafi</h2>
                    <p>1942 - 2011</p>
                </div>
                <div className="right">
                    <img src="./mg.png" alt="img" />
                </div>
            </div>
        </div>
    )
}

export default AboutLayouts