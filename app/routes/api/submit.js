import { json } from '@remix-run/node';
import Survey from '~/models/Survey';

export const action = async ({ request }) => {
  const data = await request.json();
  const survey = new Survey(data);
  await survey.save();
  return json({ success: true });
};