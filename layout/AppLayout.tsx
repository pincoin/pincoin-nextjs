const AppLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="app-layout">{props.children}</div>
    );
};

export default AppLayout;