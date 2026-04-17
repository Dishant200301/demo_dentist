import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import PageBanner from '@/modules/core/components/PageBanner';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import ArrowIcon from '@/modules/core/components/ArrowIcon';
import { API_BASE_URL, getPublicHeaders } from '@/modules/appointments/utils/apiConfig';

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const resp = await fetch(`${API_BASE_URL}/blogs`, {
          headers: getPublicHeaders()
        });
        const data = await resp.json();
        if(data.success) {
          setBlogs(data.data.slice(0, 6));
        }
      } catch (e) {
        console.error('Error fetching blogs', e);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Insights & Articles - Eyora Eye Care</title>
        <meta name="description" content="Explore expert insights, eye health tips, and the latest updates from the Eyora Eye Care team." />
      </Helmet>
      <div className="pt-0">
        <PageBanner title="Insights & Articles" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Insights & Articles' }]} />

        <section className="section-padding container-padding min-h-[400px]">
          {loading ? (
            <div className="flex items-center justify-center w-full h-[200px]">
              <Loader2 className="w-10 h-10 animate-spin text-[#00ADEE]" />
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center w-full text-gray-500 py-20">
              No articles have been written yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {blogs.map((post, i) => (
                <AnimateOnScroll key={post._id} delay={(i % 3) * 0.1}>
                  <Link to={`/blog/${post.slug || post._id}`} className="group flex flex-col h-full bg-white rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                    <div className="mx-[10px] mt-[10px] overflow-hidden h-[220px] sm:h-[240px] md:h-[260px] rounded-[12px] shrink-0">
                      <img src={post.image || '/images/hero/hero-bg.jpg'} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="px-4 sm:px-5 pt-5 sm:pt-[25px] pb-5 flex flex-col flex-1">
                      <div className="flex items-center flex-wrap gap-2 mb-3">
                        {post.content?.tags ? (
                          post.content.tags.slice(0, 2).map((tag: string) => (
                            <span key={tag} className="text-[#00ADEE] text-[10px] font-bold uppercase tracking-widest bg-[#00ADEE]/5 px-2 py-1 rounded-md">{tag}</span>
                          ))
                        ) : (
                          <span className="text-[#00ADEE] text-[10px] font-bold uppercase tracking-widest bg-[#00ADEE]/5 px-2 py-1 rounded-md">{post.category || 'Vision Care'}</span>
                        )}
                        <span className="text-[#424C6F] text-[12px] ml-auto">
                          {post.publishDate ? new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                        </span>
                      </div>
                      <h3 className="text-[#15224D] font-semibold text-[17px] sm:text-[19px] leading-[26px] sm:leading-[28px] mb-4 line-clamp-2 md:line-clamp-3">{post.title}</h3>
                      <div className="flex items-center gap-2 mt-auto pt-4">
                        <span className="text-[#15224D] font-semibold text-[14px] sm:text-[16px] leading-[21px]">Read More</span>
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00ADEE] flex items-center justify-center group-hover:bg-[#15224D] transition-colors">
                          <ArrowIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:-rotate-45 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Blog;
