import React from "react";
import { Books } from "../../components/Books";
import { DateNum } from "../../components/DateNum";
import { GrayCard } from "../../components/GrayCard";
import { GreenCard } from "../../components/GreenCard";
import { Logo } from "../../components/Logo";
import { Personal } from "../../components/Personal";
import { PurpleCard } from "../../components/PurpleCard";
import { ThisMonth } from "../../components/ThisMonth";
import { ThisWeek } from "../../components/ThisWeek";
import "./style.css";

export const BeyondMerkhet = () => {
  return (
    <div className="beyond-merkhet">
      <div className="div-3">
        <div className="overlap">
          <div className="main">
            <div className="overlap-2">
              <div className="background" />
              <div className="times">
                <div className="element-pm-line">
                  <div className="rectangle-2" />
                  <div className="div-4">
                    <div className="text-wrapper-13">6 pm</div>
                    <img
                      className="img-2"
                      alt="Moon"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/moon.svg"
                    />
                  </div>
                </div>
                <div className="element-pm-line-2">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-14">5 pm</div>
                </div>
                <div className="element-pm-line-3">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-14">4 pm</div>
                </div>
                <div className="element-pm-line-4">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-14">3 pm</div>
                </div>
                <div className="element-pm-line-5">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-14">2 pm</div>
                </div>
                <div className="element-pm-line-6">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-14">1 pm</div>
                </div>
                <div className="element-pm-line-7">
                  <div className="rectangle-2" />
                  <div className="element-pm">
                    <div className="text-wrapper-13">noon</div>
                    <img
                      className="noon-icon"
                      alt="Noon icon"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/noon-icon.svg"
                    />
                  </div>
                </div>
                <div className="element-am-line">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-14">11 am</div>
                </div>
                <div className="element-am-line-2">
                  <div className="group-12">
                    <div className="rectangle-4" />
                    <div className="rectangle-5" />
                  </div>
                  <div className="text-wrapper-15">10 am</div>
                </div>
                <div className="element-am-line-3">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-14">9 am</div>
                </div>
                <div className="element-am-line-4">
                  <div className="rectangle-2" />
                  <div className="div-4">
                    <div className="text-wrapper-13">8 am</div>
                    <img
                      className="img-2"
                      alt="Sun"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/sun.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="tasks">
                <div className="line">
                  <div className="overlap-3">
                    <GreenCard
                      className="green-card-instance"
                      divClassName="design-component-instance-node"
                      divClassNameOverride="design-component-instance-node"
                    />
                    <div className="video-icon">
                      <img
                        className="video-solid"
                        alt="Video solid"
                        src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/video-solid-1-1.svg"
                      />
                    </div>
                  </div>
                  <GreenCard
                    className="green-card-2"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="design-component-instance-node"
                    text="Emails"
                    text1="1 PM"
                  />
                  <PurpleCard
                    className="purple-card-instance"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="purple-card-2"
                    text="Lunch"
                    text1="12 PM"
                    text2="(1&nbsp;&nbsp;hr)"
                  />
                  <DateNum
                    className="date-num-instance"
                    divClassName="date-num-2"
                    divClassNameOverride="date-num-2"
                    rectangleClassName="date-num-3"
                  />
                </div>
                <div className="line-2">
                  <PurpleCard
                    className="purple-card-3"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="purple-card-4"
                    text="Weekly design"
                    text1="10 AM"
                    text2="(2 hrs)"
                  />
                  <GrayCard
                    className="gray-card-instance"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="gray-card-2"
                    text={
                      <>
                        East-town <br />
                        project
                      </>
                    }
                    text1="1:30 PM"
                    text2="(2.5 hrs)"
                  />
                  <GrayCard
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="gray-card-3"
                    groupClassName="design-component-instance-node-4"
                    text="Lunch"
                    text1="12 PM"
                    text2="(1 hr)"
                  />
                  <DateNum
                    className="date-num-instance"
                    divClassName="date-num-5"
                    divClassNameOverride="date-num-6"
                    overlapGroupClassName="date-num-4"
                    rectangleClassName="date-num-3"
                    text="tue"
                    text1="08"
                  />
                </div>
                <div className="line-3">
                  <GreenCard
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="design-component-instance-node"
                    frameClassName="green-card-3"
                    groupClassName="design-component-instance-node-4"
                    text="Lunch"
                    text1="12 PM"
                    text2="(1 hr)"
                  />
                  <PurpleCard
                    className="purple-card-5"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="purple-card-4"
                    text={
                      <>
                        Interns
                        <br />
                        interview
                      </>
                    }
                    text1="1 PM"
                    text2="(2 hrs)"
                  />
                  <GrayCard
                    className="gray-card-4"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="gray-card-2"
                    text={
                      <>
                        Design <br />
                        onboarding
                      </>
                    }
                    text1="9:30 AM"
                    text2="(2.5 hrs)"
                  />
                  <DateNum
                    className="date-num-instance"
                    divClassName="date-num-8"
                    divClassNameOverride="date-num-9"
                    overlapGroupClassName="date-num-7"
                    rectangleClassName="date-num-3"
                    text="wed"
                    text1="09"
                  />
                </div>
                <div className="line-4">
                  <div className="overlap-4">
                    <GreenCard
                      className="green-card-4"
                      divClassName="design-component-instance-node"
                      divClassNameOverride="design-component-instance-node"
                      groupClassName="green-card-5"
                      text="Write hiring"
                      text1="1 PM"
                      text2="(3 hrs)"
                    />
                    <div className="video-solid-wrapper">
                      <img
                        className="video-solid"
                        alt="Video solid"
                        src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/video-solid-1.svg"
                      />
                    </div>
                  </div>
                  <PurpleCard
                    className="purple-card-6"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="design-component-instance-node-5"
                    text="Blog post"
                    text1="10:30 AM"
                    text2="(1&nbsp;&nbsp;hr)"
                  />
                  <GrayCard
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="gray-card-3"
                    groupClassName="design-component-instance-node-4"
                    text="Lunch"
                    text1="12 PM"
                    text2="(1 hr)"
                  />
                  <DateNum
                    className="date-num-instance"
                    divClassName="date-num-11"
                    divClassNameOverride="date-num-9"
                    overlapGroupClassName="date-num-10"
                    rectangleClassName="date-num-3"
                    text="thu"
                    text1="10"
                  />
                </div>
                <div className="line-5">
                  <GreenCard
                    className="green-card-6"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="design-component-instance-node"
                    groupClassName="green-card-7"
                    text="Book offsite"
                    text1="8:55 AM"
                    text2="(3 hr 5 min)"
                  />
                  <PurpleCard
                    className="purple-card-7"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="purple-card-2"
                    text="Lunch"
                    text1="12 PM"
                    text2="(1&nbsp;&nbsp;hr)"
                  />
                  <GrayCard
                    className="gray-card-5"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="gray-card-2"
                    text={
                      <>
                        Website design
                        <br />
                        review
                      </>
                    }
                    text1="1:30 PM"
                    text2="(2.5 hrs)"
                  />
                  <DateNum
                    className="date-num-instance"
                    divClassName="date-num-13"
                    divClassNameOverride="date-num-9"
                    overlapGroupClassName="date-num-12"
                    rectangleClassName="date-num-3"
                    text="fri"
                    text1="11"
                  />
                </div>
                <div className="line-6">
                  <GreenCard
                    className="green-card-8"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="design-component-instance-node"
                    text="Shopping"
                    text1="1 PM"
                    text2="(2 hrs)"
                  />
                  <PurpleCard
                    className="purple-card-8"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="purple-card-4"
                    text="Clean &amp; cook"
                    text1="11 AM"
                    text2="(2 hrs)"
                  />
                  <DateNum
                    className="date-num-instance"
                    divClassName="date-num-13"
                    divClassNameOverride="date-num-9"
                    overlapGroupClassName="date-num-14"
                    rectangleClassName="date-num-3"
                    text="sat"
                    text1="12"
                  />
                </div>
                <div className="line-7">
                  <GreenCard
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="design-component-instance-node"
                    frameClassName="green-card-3"
                    groupClassName="design-component-instance-node-4"
                    text="Brunch"
                    text1="12 PM"
                    text2="(1 hr)"
                  />
                  <PurpleCard
                    className="purple-card-9"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    text="Deadpool"
                    text1="1 PM"
                    text2="(3 hrs)"
                  />
                  <GrayCard
                    className="gray-card-6"
                    divClassName="design-component-instance-node"
                    elementHrsClassName="design-component-instance-node"
                    frameClassName="design-component-instance-node-2"
                    groupClassName="design-component-instance-node-5"
                    text="Laundry"
                    text1="10:30 AM"
                    text2="(1 .5 hrs)"
                  />
                  <DateNum
                    className="date-num-instance"
                    divClassName="date-num-16"
                    divClassNameOverride="date-num-9"
                    overlapGroupClassName="date-num-15"
                    rectangleClassName="date-num-3"
                    text="sun"
                    text1="13"
                  />
                </div>
              </div>
              <div className="footer-card">
                <div className="overlap-5">
                  <div className="rectangle-6" />
                  <div className="rectangle-7" />
                  <div className="video-wrapper">
                    <img
                      className="video"
                      alt="Video"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/video.svg"
                    />
                  </div>
                  <div className="avatars">
                    <div className="overlap-group-4">
                      <img
                        className="ellipse-5"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/ellipse-6-1@2x.png"
                      />
                      <img
                        className="ellipse-6"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/ellipse-7-1@2x.png"
                      />
                      <img
                        className="ellipse-7"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/ellipse-8-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="text-wrapper-16">Weekly design</div>
                  <div className="text-wrapper-17">Upcoming event</div>
                </div>
                <div className="command-icon">
                  <img
                    className="command-symbol"
                    alt="Command symbol"
                    src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/command-symbol-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <header className="header">
            <div className="today">
              <div className="text-wrapper-18">Today</div>
            </div>
            <div className="share">
              <div className="text-wrapper-19">Share</div>
            </div>
            <div className="march">March 2022&nbsp;&nbsp; /&nbsp;&nbsp; W9</div>
            <img
              className="angle-down"
              alt="Angle down"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/angle-down.svg"
            />
            <img
              className="arrow-right"
              alt="Arrow right"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/arrow-right.svg"
            />
            <img
              className="arrow-left"
              alt="Arrow left"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/arrow-left.svg"
            />
          </header>
          <p className="p">Add your Task here ...</p>
        </div>
        <div className="side-menu">
          <div className="card">
            <div className="text">
              <div className="overlap-6">
                <div className="overlap-7">
                  <div className="text-wrapper-20">per user</div>
                  <div className="text-wrapper-21">per month</div>
                </div>
                <div className="overlap-group-5">
                  <div className="text-wrapper-22">$10</div>
                  <div className="text-wrapper-23">Professional</div>
                </div>
              </div>
              <div className="text-wrapper-24">-Unlimited history</div>
              <div className="text-wrapper-25">-Unlimited share links</div>
            </div>
            <img
              className="arrow-right-solid"
              alt="Arrow right solid"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/arrow-right-solid-1.svg"
            />
          </div>
          <div className="main-2">
            <div className="frame-3">
              <ThisWeek
                className="design-component-instance-node-6"
                groupClassName="design-component-instance-node-7"
                groupClassNameOverride="design-component-instance-node-8"
                plusSolid="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-5.svg"
                plusSolidClassName="design-component-instance-node-9"
                property1="default"
              />
              <ThisMonth
                className="design-component-instance-node-6"
                divClassName="design-component-instance-node-8"
                groupClassName="design-component-instance-node-7"
                plusSolid="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-4.svg"
                plusSolidClassName="design-component-instance-node-9"
                property1="default"
              />
              <Personal
                checkBoxesClassName="design-component-instance-node-9"
                className="design-component-instance-node-6"
                groupClassName="design-component-instance-node-7"
                groupClassNameOverride="design-component-instance-node-8"
                plusSolid="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-3.svg"
                property1="default"
              />
              <Books
                className="design-component-instance-node-6"
                divClassName="design-component-instance-node-8"
                groupClassName="design-component-instance-node-7"
                plusSolid="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-2.svg"
                plusSolidClassName="design-component-instance-node-9"
                property1="default"
              />
            </div>
            <div className="todos-heading">
              <div className="text-wrapper-26">Todos</div>
              <div className="group-13">
                <div className="plus">
                  <img
                    className="plus-solid-5"
                    alt="Plus solid"
                    src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-1.svg"
                  />
                </div>
                <div className="option">
                  <div className="dots-icon">
                    <div className="ellipse-8" />
                    <div className="ellipse-9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-bar">
          <img
            className="profile"
            alt="Profile"
            src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/profile@2x.png"
          />
          <div className="icon">
            <img
              className="icon-2"
              alt="Icon"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/icon@2x.png"
            />
          </div>
          <div className="avatars-2">
            <img
              className="ellipse-10"
              alt="Ellipse"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/ellipse-6@2x.png"
            />
            <img
              className="ellipse-11"
              alt="Ellipse"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/ellipse-7@2x.png"
            />
            <img
              className="ellipse-12"
              alt="Ellipse"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/ellipse-8@2x.png"
            />
            <div className="add">
              <img
                className="plus-solid-6"
                alt="Plus solid"
                src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1.svg"
              />
            </div>
          </div>
          <div className="line-8" />
          <div className="inbox">
            <img
              className="inbox-2"
              alt="Inbox"
              src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/inbox.svg"
            />
          </div>
          <div className="calender">
            <div className="overlap-group-6">
              <div className="rectangle-8" />
              <div className="rectangle-9" />
              <div className="text-wrapper-27">8</div>
            </div>
          </div>
          <Logo
            className="logo-instance"
            divClassName="logo-5"
            divClassNameOverride="logo-6"
            ellipseClassName="logo-3"
            ellipseClassNameOverride="logo-4"
            groupClassName="logo-2"
          />
        </div>
      </div>
    </div>
  );
};
