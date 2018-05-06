/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import ProjectInfo from '../../../../package.json';

import {
  MainWrapper,
  LoginWrapper,
  TheMgoncalvesLogo,
  FormWrapper,
  FormItem,
  ForgotPassword,
  LoginButton,
} from './styles';

function Login() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Login | {ProjectInfo.description}</title>
      </Helmet>
      <MainWrapper>
        <div className="container">
          <div className="row">
            <LoginWrapper className="col-10 offset-1 col-md-8 offset-md-2 col-lg-5 offset-lg-3">
              <TheMgoncalvesLogo src={require("static/images/themgoncalves-white.png")} alt="themgoncalves logo" />
              <FormWrapper>
                <FormItem>
                  <input type="text" placeholder="Your @username" />
                </FormItem>
                <FormItem>
                  <input type="password" placeholder="Your password" />
                </FormItem>
                <FormItem textAlign="right">
                  <ForgotPassword href="javascript:void(0);">Forgot your password?</ForgotPassword>
                </FormItem>
                <FormItem>
                  <LoginButton>Sign in</LoginButton>
                </FormItem>
              </FormWrapper>
            </LoginWrapper>
          </div>
        </div>
      </MainWrapper>
    </React.Fragment>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Login);
