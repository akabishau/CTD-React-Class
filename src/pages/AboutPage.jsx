import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';

export default function AboutPage() {
  return (
    <DefaultLayout>
      <H1>About</H1>
      <p>
        This is a Todo List application. You can use it to manage your tasks.
      </p>
    </DefaultLayout>
  );
}
