import React, { useCallback, useState } from "react";
import { AuthLayout, JoinForm } from "components";
import { useDispatch } from "react-redux";
import { userActions } from "modules";

const initState = {
  email: "",
  password: "",
  confirmPassword: "",
  nickname: "",
  address: "",
  addressDetail: "",
};

export function JoinPage({ location }) {
  const dispatch = useDispatch();
  const [joinForm, setJoinForm] = useState(initState);

  const from = location.state?.from;

  const onChange = useCallback(
    ({ target }) => {
      console.log(joinForm);
      const { name, value } = target;

      setJoinForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [joinForm]
  );

  const onSubmit = useCallback(() => {
    console.log("hi");
    const { confirmPassword, ...requestForm } = joinForm;

    dispatch(userActions.join(requestForm, from.pathname));
  }, [joinForm, from]);

  return (
    <AuthLayout>
      <JoinForm
        title="회원가입"
        form={joinForm}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </AuthLayout>
  );
}

JoinPage.propTypes = {};
