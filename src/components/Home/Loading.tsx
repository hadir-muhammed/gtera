import React, { FC } from 'react';

import Sandwatch from "../../assets/images/sandwatch.svg";
import Message from "../../assets/images/message.svg";

import { Button, Progress } from "antd";

import './loading.scss';

type Props = {
    setShowContactUs: (value: boolean) => void;
}

const Loading: FC<Props> = (props: Props) => {
    return (
        <div className="gtera-wrapper col-10 m-auto">
            <div className="waiting">
                <div>
                    <h3>We are still</h3>
                    <h1>Cooking Our Website...</h1>
                    <h4>
                        <span className="arrow">{`<`}</span>
                        <p>
                            We are working on our website and going to launch it soon,
                            Stay Tuned.
                        </p>
                        <span className="arrow">{`/>`}</span>

                        <Button
                            onClick={() => props.setShowContactUs(true)}
                            className="contact-us-btn"
                        >
                            <img src={Message} />
                            <span className="btn-text"> Contact Us</span>
                        </Button>
                    </h4>

                    <Progress
                        strokeColor={{
                            "0%": "#384B5E",
                            "100%": "#EC5F60",
                        }}
                        percent={20}
                    />
                </div>

                <div className="sandwatch-icon">
                    <img src={Sandwatch} />
                </div>
            </div>
        </div>
    )
}

export default Loading;