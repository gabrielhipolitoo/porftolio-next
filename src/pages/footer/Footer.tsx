import MyName from "@/components/myName/MyName";

export default function Footer() {
  return (
    <section className="h-[100px] flex items-center justify-between">
      <MyName />
      <p className="text-white">Copyright © 2025 Todos os direitos reservados </p>
    </section>
  );
}
