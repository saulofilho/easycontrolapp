import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: lightblue;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  right: 0;
  top: calc(100% + 10px);
  background: white;
  border-radius: 4px;
  border: 1px solid lightgray;
  padding: 15px 5px;
  box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.07);
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid;
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, 'pink')};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: lightblue;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;
