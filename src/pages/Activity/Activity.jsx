const PageActivity = () => {
    return (
        <section className="page" id="page-activity">
            <div className="page-header">
                <h1 className="page-title">Activity</h1>
                <p className="page-subtitle">
                    Everything happening across the board
                </p>
            </div>

            <div
                className="mount-wrap"
                data-hook="3.5 useState + useEffect (pagination)">
                <div className="mount-point" id="mount-activity">
                    <div className="activity-list">
                        <div className="activity-item">
                            <span className="activity-dot"></span>
                            <div>
                                <div className="activity-text">
                                    <strong>Riya Nair</strong> moved "Fix flaky
                                    retry test" to In progress
                                </div>
                                <div className="activity-time">
                                    2 minutes ago
                                </div>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-dot"></span>
                            <div>
                                <div className="activity-text">
                                    <strong>Sasha Kim</strong> commented on
                                    "Migrate onboarding flow"
                                </div>
                                <div className="activity-time">
                                    18 minutes ago
                                </div>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-dot"></span>
                            <div>
                                <div className="activity-text">
                                    <strong>Jules Dubois</strong> closed "Write
                                    API docs for /webhooks"
                                </div>
                                <div className="activity-time">1 hour ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="load-more-wrap">
                        <button className="btn ghost">Load more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageActivity
