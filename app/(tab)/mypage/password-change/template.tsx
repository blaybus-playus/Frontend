import BackHeader from "@/components/common/BackHeader";

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BackHeader title="비밀번호 변경" />
      <div className="flex-1">
        {children}
      </div>
    </>
  );
}