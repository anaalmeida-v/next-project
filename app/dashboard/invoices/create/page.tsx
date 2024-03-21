import Form from '@/app/ui/invoices/create-form';//chamando componente Form
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';//chamando função fetchCustomers (busca name e id do cliente)
 
export default async function Page() {
  const customers = await fetchCustomers();//customers recebe dados retornados da função
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />{/* passando dados do cliente para 'Form' */}
    </main>
  );
}