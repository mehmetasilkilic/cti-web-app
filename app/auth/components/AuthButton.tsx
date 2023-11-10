type AuthButtonProps = {
  title: string;
};

const AuthButton = ({ title }: AuthButtonProps) => (
  <button className="btn btn-dark block w-full text-center">{title}</button>
);

export default AuthButton;
