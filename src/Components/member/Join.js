/* 회원가입 컴포넌트 */

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Join() {

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [pwd, setPwd] = useState("");
	const [checkPwd, setCheckPwd] = useState("");

	const navigate = useNavigate();

	const changeEmail = (event) => {
		setEmail(event.target.value);
	}

	const changeName = (event) => {
		setName(event.target.value);
	}

	const changePwd = (event) => {
		setPwd(event.target.value);
	}

	const changeCheckPwd = (event) => {
		setCheckPwd(event.target.value);
	}

	/* 아이디 중복 체크 */
	const checkEmailDuplicate = async () => {

		await axios.get("http://localhost:8989/user/checkId", { params: { email: email } })
			.then((resp) => {
				console.log("[Join.js] checkEmailDuplicate() success :D");
				console.log(resp.data);

				if (resp.status === 200) {
					alert("The email is availabe now!");
				}
			})
			.catch((err) => {
				console.log("[Join.js] checkEmailDuplicate() error :<");
				console.log(err);

				const resp = err.response;
				if (resp.status === 400) {
					alert(resp.data);
				}
			});

	}

	/* 회원가입 */
	const join = async () => {

		const req = {
			email: email,
			password: pwd,
			passwordCheck: checkPwd,
			username: name,
		}

		await axios.post("http://localhost:8989/user/register", req)
			.then((resp) => {
				console.log("[Join.js] join() success :D");
				console.log(resp.data);

				alert(resp.data.username + ", joined well!🎊");
				navigate("/login");

			}).catch((err) => {
				console.log("[Join.js] join() error :<");
				console.log(err);

				const resp = err.response;
				if (resp.status === 400) {
					alert(resp.data);
				}
			});
	}

	return (
		<div>
			<table className="table">
				<tbody>
					<tr>
						<th className="col-2">e-mail</th>
						<td>
							<input type="text" value={email} onChange={changeEmail} size="50px" /> &nbsp; &nbsp;
							<button className="btn btn-outline-danger" onClick={checkEmailDuplicate}>
								<i className="fas fa-check"></i> check email</button>
						</td>
					</tr>

					<tr>
						<th>name</th>
						<td>
							<input type="text" value={name} onChange={changeName} size="50px" />
						</td>
					</tr>

					<tr>
						<th>password</th>
						<td>
							<input type="password" value={pwd} onChange={changePwd} size="50px" />
						</td>
					</tr>

					<tr>
						<th>check password</th>
						<td>
							<input type="password" value={checkPwd} onChange={changeCheckPwd} size="50px" />
						</td>
					</tr>
				</tbody>
			</table><br />

			<div className="my-3 d-flex justify-content-center">
				<button className="btn btn-outline-secondary" onClick={join}><i className="fas fa-user-plus"></i> Join</button>
			</div>

		</div>
	);
}

export default Join;
