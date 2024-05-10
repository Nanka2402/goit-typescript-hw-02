type PropsTypes = {
  message: string | boolean;
};

export default function ErrorMessage({ message }: PropsTypes) {
  return (
    <div>
      <span>{message}</span>
    </div>
  );
}
