'use server'; //marca funções exportadas como funções de servidor -> podem então ser importadas para componentes Cliente e Servidor.)

export async function createInvoice(formData: FormData) {
  //formData como argumento
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  console.log(rawFormData);
}
