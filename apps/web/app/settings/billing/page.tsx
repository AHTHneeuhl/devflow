export default function BillingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Billing</h1>

      <div className="mt-6 space-y-4">
        <button className="px-4 py-2 bg-black text-white rounded">
          Upgrade Plan
        </button>

        <button className="px-4 py-2 border rounded">
          Open Billing Portal
        </button>
      </div>
    </div>
  );
}
