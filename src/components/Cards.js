import './Cards.css'



const Cards = ({data}) => {
    return(
    <div className="bg-gradient-primary">
        <div class="main-content">
        <div class="header pb-8 pt-5">
            <div class="container-fluid">
            <div class="header-body">
                <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                        <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">REVENUE</h5>
                            <span class="h2 font-weight-bold mb-0">$ {data.Revenue}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i class="fas fa-chart-bar"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                        <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Units Sold</h5>
                            <span class="h2 font-weight-bold mb-0">{data.Units}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i class="fas fa-chart-pie"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                        <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Sales count</h5>
                            <span class="h2 font-weight-bold mb-0">{data.Sales}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i class="fas fa-users"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                        <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Stock</h5>
                            <span class="h2 font-weight-bold mb-0">38,65%</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i class="fas fa-percent"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Cards;